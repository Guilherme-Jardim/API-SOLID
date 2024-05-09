import { Gym, Prisma } from '@prisma/client'
import { GymsRespository } from '../gyms-repository'
import { randomUUID } from 'crypto'

export class InMemoryGymsRepository implements GymsRespository {
  // Sem Promisse para o Prisma utilizando o model User
  // public items: Gym[] = []
  // findById(id: string) {
  //   const gym = this.items.find((item) => item.id === id)
  //   if (!gym) {
  //     return null
  //   }
  //   return gym
  // }
  // create(data: Prisma.GymCreateInput) {
  //   const gym = {
  //     id: randomUUID(),
  //     title: data.title,
  //     description: data.description ?? null,
  //     phone: data.phone ?? null,
  //     latitude: new Prisma.Decimal(data.latitude.toString()),
  //     longitude: new Prisma.Decimal(data.longitude.toString()),
  //     created_at: new Date(),
  //   }

  //   this.items.push(gym)

  //   return gym
  // }

  // Com Promisse para o Prisma utilizando o model User
  public items: Gym[] = []
  findById(id: string): Promise<Gym | null> {
    return new Promise((resolve) => {
      const gym = this.items.find((item) => item.id === id)
      resolve(gym || null)
    })
  }

  create(data: Prisma.GymCreateInput): Promise<Gym> {
    return new Promise((resolve) => {
      const gym = {
        id: data.id ?? randomUUID(),
        title: data.title,
        description: data.description ?? null,
        phone: data.phone ?? null,
        latitude: new Prisma.Decimal(data.latitude.toString()),
        longitude: new Prisma.Decimal(data.longitude.toString()),
        created_at: new Date(),
      }

      this.items.push(gym)

      resolve(gym)
    })
  }
}
