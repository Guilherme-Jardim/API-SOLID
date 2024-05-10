import { FetchNearbygymsUseCase } from '../fetch-nearby-gyms'
import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbygymsUseCase(gymsRepository)

  return useCase
}
