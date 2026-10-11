"use client";

import Button from "@/app/atoms/Button";
import Art from "@/app/molecules/Art";
import Block from "@/app/molecules/Block";
import Game from "@/app/molecules/Game";
import ProfileBlock from "@/app/organisms/ProfileBlock";
import ArtProps from "@/types/art";
import GameProps from "@/types/game";
import ResponseResult from "@/types/response";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

/**
 * Homepage
 *
 * @example
* <HomeTemplate />
*/
const HomeTemplate : React.FC<{
	arts: Promise<ResponseResult<ArtProps>>;
	games: Promise<ResponseResult<GameProps>>;
}> = ({
	arts,
	games
}) => (
	<>
		<ProfileBlock />
		<Block<GameProps>
			title="Games"
			request={games}
			render={(data) => <Game {...data} />}
			extend={(
				<Link href="/games">
					<Button variant="second">
						More
						<LuChevronRight />
					</Button>
				</Link>
			)}
		/>
		<Block<ArtProps>
			title="Arts"
			request={arts}
			render={(data) => <Art {...data} />}
			extend={(
				<Link href="/arts">
					<Button variant="second">
						More
						<LuChevronRight />
					</Button>
				</Link>
			)}
		/>
	</>
);

export default HomeTemplate ;
