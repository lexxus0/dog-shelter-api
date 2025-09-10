 export type Dog = {
  id: string;
  name: string;
  emotional_stability?: number; // 1..5
  obedience?: number;           // 1..5
  health?: number;              // 1..5
  socialization?: number;       // 1..5
  apartment_ok?: boolean;
  good_with_kids?: boolean;
  good_with_cats?: boolean;
  energy?: number | null;       // 1..5
};

export type Query = {
  apartment: '0'|'1';
  kids: '0'|'1';
  cats: '0'|'1';
  experience: 'novice'|'experienced';
  activity: 'low'|'medium'|'high';
  limit: number;
};

export function estimateEnergy(d: Dog) {
  const obedience = d.obedience ?? 3;
  const social   = d.socialization ?? 3;
  const proxy = (6 - obedience + social) / 2;
  return Math.min(5, Math.max(1, Math.round(proxy)));
}

export function closeness(need: number, val: number) {
  return 1 - Math.min(1, Math.abs((need ?? 3) - (val ?? 3)) / 4);
}

export function scoreDogs(dogs: Dog[], q: Query) {
  const needEnergy = q.activity === 'low' ? 2 : q.activity === 'high' ? 4 : 3;

  const W = {
    apt: 1.5, kids: 2.0, cats: 1.5, energy: 2.5,
    stability: 1.8, obedience: 1.8, health: 1.2, social: 1.0,
  };
  if (q.experience === 'novice') { W.stability += 0.7; W.obedience += 0.7; }
  const MAX = W.apt + W.kids + W.cats + W.energy + W.stability + W.obedience + W.health + W.social;

  const scored = dogs.map(d => {
    const energy = d.energy ?? estimateEnergy(d);
    let score = 0;

    if (q.apartment === '1' && d.apartment_ok) score += W.apt;
    if (q.kids === '1' && d.good_with_kids)   score += W.kids;
    if (q.cats === '1' && d.good_with_cats)   score += W.cats;

    score += closeness(needEnergy, energy) * W.energy;
    score += (d.emotional_stability ?? 3) / 5 * W.stability;
    score += (d.obedience ?? 3) / 5 * W.obedience;
    score += (d.health ?? 3) / 5 * W.health;
    score += (d.socialization ?? 3) / 5 * W.social;

    const percent = Math.round((score / MAX) * 100);

    const reasons: string[] = [];
    if (q.apartment === '1' && d.apartment_ok) reasons.push('підходить для квартири');
    if (q.kids === '1' && d.good_with_kids) reasons.push('добре з дітьми');
    if (q.cats === '1' && d.good_with_cats) reasons.push('сумісний з кішками');
    if (closeness(needEnergy, energy) > 0.7) {
      reasons.push(q.activity === 'low' ? 'спокійна енергійність' :
                   q.activity === 'high' ? 'висока активність' : 'помірна активність');
    }
    const strengths = [
      ['емоційна стабільність', d.emotional_stability],
      ['слухняність', d.obedience],
      ['стан здоровʼя', d.health],
      ['соціалізованість', d.socialization],
    ].sort((a,b)=> (b[1]||0)-(a[1]||0)).slice(0,2).map(s=>s[0]);
    strengths.forEach(s => reasons.push(висока ${s}));

    return { dog: d, percent, reasons };
  }).sort((a,b)=> b.percent - a.percent);

  const top = scored.slice(0, q.limit).map(x => ({
    id: x.dog.id, name: x.dog.name, percent: x.percent, reasons: x.reasons
  }));

  const scores = Object.fromEntries(
    scored.map(x => [x.dog.id, { percent: x.percent, reasons: x.reasons }])
  );

  return { top, scores };
}