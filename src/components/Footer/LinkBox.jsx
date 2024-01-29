import Link from "next/link";

const LinkBox = ({title, links}) => {
    return (
        <div>
            <h5 className="text-xl font-medium text-[#1A202C]">{title}</h5>
            <div className="space-y-2">
                {
                    links?.map(link => <Link href={link?.href} key={link?.id} className="block text-[rgba(19,_19,_19,_0.60)]">{link?.level}</Link>)
                }
            </div>
        </div>
    );
};

export default LinkBox;