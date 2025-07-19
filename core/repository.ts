import postgresConn from "./db";
import { Contact } from "./types";

export interface ContactRepository {
    findByEmailOrPhone(email: string, phone: string): Promise<Contact[] | null>
    createContact(contact: Contact, isPrimary: true, link_id?: number): Promise<Contact | null>
}

export class PostgresRepository implements ContactRepository {

    async findByEmailOrPhone(email: string, phone: string): Promise<Contact[] | null> {
        if (!email && !phone) return null

        const contact = await postgresConn<Contact[]>`SELECT * FROM contact WHERE email = ${email} OR phone_number = ${phone}`
        return contact.length > 0 ? contact : null
    }

    async createContact(contact: Contact, isPrimary: true, link_id?: number): Promise<Contact | null> {
        const now = new Date();

        if (!contact.email || !contact.phoneNumber || !contact.linkPrecedence) {
            return null
        }

        const inserted = await postgresConn<Contact[]>`
        INSERT INTO contact (
            phone_number,
            email,
            linked_id,
            link_precedence,
            created_at,
            updated_at,
            deleted_at
        ) VALUES (
            ${contact.phoneNumber},
            ${contact.email},
            ${link_id ?? null},
            ${isPrimary ? 'primary' : 'secondary'},
            ${now},
            ${now},
            NULL
        ) RETURNING *;
        `
        return inserted[0];
    }

}