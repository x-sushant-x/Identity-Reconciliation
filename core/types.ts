export interface Contact {
    id: Number
    phoneNumber?: number
    email?: string
    linkedId?: number
    linkPrecedence: "primary" | "secondary"
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}

export interface ReqBody {
    phoneNumber?: number
    email?: string
}