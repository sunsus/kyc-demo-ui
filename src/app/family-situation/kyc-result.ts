export interface KycResult {
  fullName: string
  relationshipStatus: string
  relationships: Relationship[]
  dateOfBirth?: string
  remarks?: string
}

export interface Relationship {
  relation: string
  fullName: string
  dateOfBirth?: string
  dateOfDeath?: string
}
