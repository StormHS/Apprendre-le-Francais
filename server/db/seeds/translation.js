exports.seed = function (knex) {
  return knex('translation')
    .del()
    .then(function () {
      return knex('translation').insert([
        {
          id: 1,
          french: 'Bonjour, je suis enchantee de vous recontrer!',
          english: 'Good morning, Nice to meet you!',
        },
        {
          id: 2,
          french: 'Peut-etre voulez-vous regarder un film',
          english: 'Maybe we could watch a movie?',
        },
        { id: 3, french: 'feijoa', english: 'Hi!' },
        { id: 4, french: 'Salut!', english: 'Hi!' },
        { id: 5, french: 'banana', english: 'Hi!' },
        { id: 6, french: 'feijoa', english: 'Hi!' },
        { id: 7, french: 'banana', english: 'Hi!' },
        { id: 8, french: 'feijoa', english: 'Hi!' },
      ])
    })
}
