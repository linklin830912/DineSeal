import { Commenting } from "@/model/Commenting";

export function mapToCommentings(data: any) { 
    const commentings = [] as Commenting[];
    data.commenting.forEach((x: any) => {
        commentings.push({
            createTime: x.create_time,
            description: x.description,
            title: x.title,
            appreciation:x.appreciation,
            rating: x.rating,
            tags: x.tags,
            diaryId: x.diary_id,
            commentingId: x.commenting_id,
            imageId: x.image_id
        } as Commenting)
    });
    
    return commentings;
}

export function mapToCommenting(data: any) { 
    const commenting = {
            createTime: data.create_time,
            description: data.description,
            title: data.title,
            appreciation:data.appreciation,
            rating: data.rating,
            tags: data.tags,
            diaryId: data.diary_id,
            commentingId: data.commenting_id,
            imageId: data.image_id
        } as Commenting;
    
    return commenting;
}