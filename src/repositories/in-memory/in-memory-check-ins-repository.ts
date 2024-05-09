import { Prisma, CheckIn } from '@prisma/client'
import { CheckInsRespository } from '../check-ins-repository'
import { randomUUID } from 'node:crypto'
import dayjs from 'dayjs'

export class InMemoryCheckInsRepository implements CheckInsRespository {
  // Sem Promisse para o Prisma utilizando o model User

  public items: CheckIn[] = []

  async countByUserId(userId: string) {
    return this.items.filter((item) => item.user_id === userId).length
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    }
    this.items.push(checkIn)
    return checkIn
  }

  async findByUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf('date')
    const endOftheDay = dayjs(date).endOf('date')
    const checkInOnSameDate = this.items.find((checkIn) => {
      const checkInDate = dayjs(checkIn.created_at)
      const isOnSameDate =
        checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOftheDay)
      return checkIn.user_id === userId && isOnSameDate
    })
    if (!checkInOnSameDate) {
      return null
    }
    return checkInOnSameDate
  }

  async findManyByUserId(userId: string, page: number) {
    return this.items
      .filter((item) => item.user_id === userId)
      .slice((page - 1) * 20, page * 20)
  }
  // Com Promisse para o Prisma utilizando o model CheckIn
  // public items: CheckIn[] = []
  // create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
  //   return new Promise((resolve) => {
  //     const checkIn = {
  //       id: randomUUID(),
  //       user_id: data.user_id,
  //       gym_id: data.gym_id,
  //       validated_at: data.validated_at ? new Date(data.validated_at) : null,
  //       created_at: new Date(),
  //     }
  //     this.items.push(checkIn)
  //     resolve(checkIn)
  //   })
  // }
  // findManyByUserId(userId: string): Promise<CheckIn[]> {
  //   return new Promise((resolve, reject) => {
  //     const items = this.items.filter((item) => item.user_id === userId)
  //     resolve(items)
  //   })
  // }
  // findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null> {
  //   return new Promise((resolve, reject) => {
  //     const startOfTheDay = dayjs(date).startOf('date')
  //     const endOftheDay = dayjs(date).endOf('date')
  //     const checkInOnSameDate = this.items.find((checkIn) => {
  //       const checkInDate = dayjs(checkIn.created_at)
  //       const isOnSameDate =
  //         checkInDate.isAfter(startOfTheDay) &&
  //         checkInDate.isBefore(endOftheDay)
  //       return checkIn.user_id === userId && isOnSameDate
  //     })
  //     if (!checkInOnSameDate) {
  //       resolve(null)
  //     } else {
  //       resolve(checkInOnSameDate)
  //     }
  //   })
  // }
}
