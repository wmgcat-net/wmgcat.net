import Links from "@/app/molecules/Links";
import Profile from "@/app/molecules/Profile";

/**
 * Profile info block
 *
 * @example
 * <ProfileBlock />
*/
const ProfileBlock: React.FC = () => {
	return (
		<div className="flex flex-col">
			<Profile />
			<Links />
		</div>
	);
};

export default ProfileBlock;
