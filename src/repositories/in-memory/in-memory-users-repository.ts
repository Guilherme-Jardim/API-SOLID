import { Prisma, User } from '@prisma/client'
import { UsersRespository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryRepository implements UsersRespository {
  // Sem Promisse para o Prisma utilizando o model User
  // public items: User[] = []
  // findByEmail(email: string) {
  //   const user = this.items.find((item) => item.email === email)
  //   if (!user) {
  //     return null
  //   }
  //   return user
  // }

  // create(data: Prisma.UserCreateInput) {
  //   const user = {
  //     id: 'user-1',
  //     name: data.name,
  //     email: data.email,
  //     password_hash: data.password_hash,
  //     created_at: new Date(),
  //   }

  //   this.items.push(user)

  //   return user
  // }

  // findById(id: string) {
  //   const user = this.items.find((item) => item.id === id)
  //   if (!user) {
  //     return null
  //   }

  // Com Promisse para o Prisma utilizando o model User
  public items: User[] = []
  findByEmail(email: string): Promise<User | null> {
    return new Promise((resolve) => {
      const user = this.items.find((item) => item.email === email)
      resolve(user || null)
    })
  }

  create(data: Prisma.UserCreateInput): Promise<User> {
    return new Promise((resolve) => {
      const user = {
        id: randomUUID(),
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        created_at: new Date(),
      }

      this.items.push(user)

      resolve(user)
    })
  }

  findById(id: string): Promise<User | null> {
    return new Promise((resolve) => {
      const user = this.items.find((item) => item.id === id)
      resolve(user || null)
    })
  }
}
