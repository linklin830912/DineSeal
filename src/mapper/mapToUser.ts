import { User } from "@/model/User";

export function mapToUser(data: any) { 
    const user = data.users[0];
    return {
        email: user.email,
        userName: user.user_name,
        userId: user.id,
        address: user.address,
        age: user.age,
        gender:user.gender,
        lastSeen: user.last_Seen
    } as User;
}