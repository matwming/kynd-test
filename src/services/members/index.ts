import { Member } from './types'

export const loadMembers = () => {
  return new Promise<Member[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          firstName: 'Sue',
          lastName: 'Bennett',
          joinedAt: '2021-10-01T10:22:01.0Z',
          intro: `I'm looking for someone to help me do a 20,000 piece jigsaw puzzle. Are you my missing piece?`,
          age: 73
        },
        {
          firstName: 'Kavitha',
          lastName: 'Chandra',
          joinedAt: '2022-04-30T06:29:54.0Z',
          intro: `Are you able to cook? Reach out to me if you make great food... especially if you love sushi.`,
          age: 22
        },
        {
          firstName: 'Alan',
          lastName: 'Klara',
          joinedAt: '2021-09-21T15:19:42.0Z',
          intro: `I want to be the very best, like no one ever was. I know it's my destiny.`,
          age: 57
        },
        {
          firstName: 'Nina',
          lastName: 'Fabricio',
          joinedAt: '2022-02-11T10:10:10.0Z',
          intro: `But oh, how it feels so real. Lying here, with no one near`,
          age: 36
        },
        {
          firstName: 'Frank',
          lastName: 'Rex',
          joinedAt: '2022-05-27T12:12:12.0Z',
          intro: `I watch the clock tick tock. Been saving all the green that I got. I can't wait to kick off my work shoes`,
          age: 19
        }
      ])
    }, 3000)
  })
}

export * from './types'