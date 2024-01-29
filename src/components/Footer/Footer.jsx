import Link from "next/link";
import LinkBox from "./LinkBox";

const aboutLinks = [
    { id: 1, href: '/', level: 'How it Works' },
    { id: 2, href: '/', level: 'Featured' },
    { id: 3, href: '/', level: 'Partnership' },
    { id: 4, href: '/', level: 'Business Relation' }
  ];
  const communityLinks = [
    { id: 1, href: '/', level: 'Events' },
    { id: 2, href: '/', level: 'Blog' },
    { id: 3, href: '/', level: 'Podcast' },
    { id: 4, href: '/', level: 'Invite a friend' }
  ];
  const socialLinks = [
    { id: 1, href: '/', level: 'Facebook' },
    { id: 2, href: '/', level: 'Youtube' },
    { id: 3, href: '/', level: 'Instragram' },
    { id: 4, href: '/', level: 'Discor' }
  ];

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-5 gap-5 max-w-screen-2xl px-5 md:px-10 py-10 bg-[#F6F7F9] md:bg-transparent">
            <div className="col-span-2">
                <h3 className="text-3xl font-medium text-blue-500 uppercase">Morent</h3>
                <p className="text-[rgba(19,_19,_19,_0.60)] max-w-sm">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className="col-span-3 grid gap-5 grid-cols-2 md:grid-cols-3">
                <LinkBox title={'About'} links={aboutLinks} />
                <LinkBox title={'Community'} links={communityLinks} />
                <LinkBox title={'Socials'} links={socialLinks} />
            </div>
        </footer>
    );
};

export default Footer;