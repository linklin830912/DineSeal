export type Commenting = {
    title: string;
    createTime?: string;
    description: string;
    imageId?:string;
    rating?:number;
    tags?:number[];
    diaryId: number;
    commentingId?: number;
    appreciation?:string;
}