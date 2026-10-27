import dayjs from "dayjs";
import Post from "../model/post";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

/**
 * PostCard
 *
 * @example
 * <PostCard />
*/
const PostCard: React.FC<Post> = ({
	id,
	content,
	image,
	created_at
}) => {
	return (
		<div 
			data-id={id}
			className="flex flex-col gap-4 w-full bg-br/50 rounded-2xl overflow-hidden"
		>
			<div className="p-4 flex flex-col gap-4">
				<div className="flex gap-4 items-center">
					<Image
						src="/avatar.png"
						width={64}
						height={64}
						alt="wmgcat"
						className="rounded-full"
					/>
					<div className="flex flex-col">
						<p className="text-xl text-primary font-medium">wmgcat</p>
						<p className="opacity-50 text-text text-base">{dayjs(created_at)?.fromNow?.()}</p>
					</div>
				</div>
				{content && <p className="text-xl text-wrap text-text">{content}</p>}
			</div>
			{image && (
				<div className="w-full h-fit">
					<img
						src={`https://wmgcat.s3.eu-north-1.amazonaws.com/posts/${image}`}
						className="w-full"
					/>
				</div>
			)}
			
		</div>
	);
};

export default PostCard;
