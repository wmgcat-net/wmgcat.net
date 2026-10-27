import { ChangeEventHandler } from "react";

const Textarea: React.FC<{
	placeholder?: string;
	ref?: React.Ref<HTMLTextAreaElement>;
	value?: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}> = ({
	placeholder,
	...props
}) => {
	return (
		<textarea
			className="outline-none border border-br p-2 rounded-2xl text-xl focus:border-second h-42 resize-none"
			placeholder={placeholder}
			{...props}
		/>
	);
};

export default Textarea;
