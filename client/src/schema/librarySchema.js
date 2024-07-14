import { z } from "zod"

const librarySchema = z.object({
    libname: z.string().min(2),
    address: z.string().min(8),
    name:z.string().min(3),
    email:z.string().email(),
    password : z.string().min(8)
})

export default librarySchema