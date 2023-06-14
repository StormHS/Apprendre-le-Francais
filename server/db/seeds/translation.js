exports.seed = function (knex) {
  return knex('translation')
    .del()
    .then(function () {
      return knex('translation').insert([
        {
          id: 1,
          french: 'Bonjour, je suis enchantee de vous recontrer!',
          english: 'Good morning, Nice to meet you! (formal)',
        },
        {
          id: 2,
          french: 'Peut-être voulez-vous regarder un film',
          english: 'Maybe we could watch a movie?',
        },
        {
          id: 3,
          french: 'Tu veux un thé ou un café?',
          english: 'Would you like a tea or a coffe?',
        },
        {
          id: 4,
          french: 'Ç est ce que?',
          english: 'Whats that?',
        },
        {
          id: 5,
          french: 'je n ai pa faim, merci',
          english: 'I am not hungry, thanks',
        },
        {
          id: 6,
          french: 'Je vais bien, merci',
          english: 'I am good, thank you',
        },
        {
          id: 7,
          french: 'En fait...',
          english: 'In fact...',
        },
        {
          id: 8,
          french: 'Comment allez vous?',
          english: 'How are you? (formal)',
        },
      ])
    })
}
