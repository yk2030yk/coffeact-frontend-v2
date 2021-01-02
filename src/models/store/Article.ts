import isBefore from 'date-fns/isBefore'
import subDays from 'date-fns/subDays'

export const PUBLISH_STATUS = {
  PUBLISH: 'publish',
  UN_PUBLISH: 'unPublish',
} as const

export type PublishStatus = typeof PUBLISH_STATUS[keyof typeof PUBLISH_STATUS]

export class Article {
  public readonly id: string
  public readonly publishStatus: PublishStatus
  public readonly eyecatchImage: string
  public readonly title: string
  public readonly content: string
  public readonly tags: string[]
  public readonly createdAt: string | undefined
  public readonly updatedAt: string | undefined

  constructor({
    id = '',
    publishStatus = PUBLISH_STATUS.UN_PUBLISH,
    eyecatchImage = '',
    title = '',
    content = '',
    tags = [],
    createdAt = undefined,
    updatedAt = undefined,
  }: {
    id?: string
    publishStatus?: PublishStatus
    eyecatchImage?: string
    title?: string
    content?: string
    tags?: string[]
    createdAt?: string
    updatedAt?: string
  } = {}) {
    this.id = id
    this.publishStatus = publishStatus
    this.eyecatchImage = eyecatchImage
    this.title = title
    this.content = content
    this.tags = tags
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public get formatCreated() {
    return this.createdAt
  }

  public get formatUpdatedAt() {
    return this.updatedAt
  }

  public get isPublish() {
    return this.publishStatus === PUBLISH_STATUS.PUBLISH
  }

  public get isNewArrival() {
    return (
      this.createdAt &&
      isBefore(subDays(new Date(), 7), new Date(this.createdAt))
    )
  }
}
