import { Member } from './types'

const loadMembers = () => {
  return new Promise<Member[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: '02ba442240e4090293a1e634de2aeede',
          firstName: 'Terry',
          lastName: 'Bennett',
          joinedAt: '2021-10-01T10:22:01.0Z',
          lastMessage: `I'm looking for someone to help me do a 20,000 piece jigsaw puzzle. Are you my missing piece?`,
          age: 73
        },
        {
          id: 'd51bddd0f281fc9a02f865e04d00cbab',
          firstName: 'Kavitha',
          lastName: 'Chandra',
          joinedAt: '2022-04-30T06:29:54.0Z',
          lastMessage: `Are you able to cook? Reach out to me if you make great food... especially if you love sushi.`,
          age: 22
        },
        {
          id: '56e40b95b5dbd985c3c500f326833354',
          firstName: 'Alan',
          lastName: 'Klara',
          joinedAt: '2021-09-21T15:19:42.0Z',
          lastMessage: `I want to be the very best, like no one ever was. I know it's my destiny.`,
          age: 57
        },
        {
          id: '24104347b7fb171ba561e7cf72e26b37',
          firstName: 'Nina',
          lastName: 'Fabricio',
          joinedAt: '2022-02-11T10:10:10.0Z',
          lastMessage: `But oh, how it feels so real. Lying here, with no one near.`,
          age: 36
        },
        {
          id: 'f1c11ef872872aa9b8ddfa5f04566aca',
          firstName: 'Frank',
          lastName: 'Rex',
          joinedAt: '2022-05-27T12:12:12.0Z',
          lastMessage: `I watch the clock tick tock. Been saving all the green that I got. I can't wait to kick off my work shoes`,
          age: 19
        }
      ])
    }, 2000)
  })
}

export * from './types'
export default {
  loadMembers
}