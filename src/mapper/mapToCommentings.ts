import { Commenting } from "@/model/Commenting";

export function mapToCommentings(data: any) { 
    const commentings = [] as Commenting[];
    data.commenting.forEach((x: any) => {
        commentings.push({
            createTime: x.create_time,
            description: x.description,
            appreciation:x.appreciation,
            rating: x.rating,
            tags: x.tags,
            diaryId: x.diary_id,
            commentingId: x.commenting_id
        } as Commenting)
    });
    
    return commentings;
}