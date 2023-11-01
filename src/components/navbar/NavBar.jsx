import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../icon/Icon';

export const NavBar = () => {

    const Platform = {
        GitHub: 'github',
        StackOverflow: 'stackoverflow',
        Twitter: 'twitter',
        Linkedin: 'linkedin',
        Email: 'email',
        Facebook: 'facebook',
        Youtube: 'youtube'
    }

    const NavBar = {
        home: 'Home',
        personal: 'Projects',
        career: 'Experiences',
        resume: 'Resume',
        skills: 'Skills'
    };

    const items = [
        { title: NavBar.skills, to: '/skills', icon: 'i-carbon-software-resource-cluster' },
        { title: NavBar.personal, to: '/projects', icon: 'i-carbon-cube' },
        { title: NavBar.career, to: '/experience', icon: 'i-carbon-development' },
        { title: NavBar.resume, to: '/resume', icon: 'i-carbon-result' }
    ];


    const HOME = {
        title: 'Home',
        name: 'Francisco',
        lastName: 'Virbes',
        description: 'Junior Web Developer',
        links: [
            {
                platform: Platform.GitHub, link: 'https://github.com/'
            },
            {
                platform: Platform.Linkedin,
                link: 'https://www.linkedin.com/'
            },
            {
                platform: Platform.Twitter,
                link: 'https://twitter.com/'
            },
            {
                platform: Platform.StackOverflow,
                link: 'https://stackoverflow.com/'
            },
            {
                platform: Platform.Email,
                link: 'riadh-adrani@hotmail.fr'
            },
            {
                platform: Platform.Youtube,
                link: 'https://www.youtube.com'
            },
            {
                platform: Platform.Facebook,
                link: 'https://www.facebook.com'
            }
        ]
    };


    return (
        <div className="nav-menu">
            <nav className="container nav-items">
                <Link
                    to='/'
                    className="nav-menu-left"
                >
                    <Icon icon="i-carbon-code" className="icon-main" />
                    <span className="">{HOME.name} {HOME.lastName}</span>
                </Link>


                <div className="nav-menu-items">
                    {
                        items.map(item => (
                            <NavLink key={item.title} to={item.to} className="nav-menu-item">
                                <Icon icon={item.icon} classes="text-1.3em" />
                                <span className="nav-menu-item-label">{item.title}</span>
                            </NavLink>
                        ))
                    }
                </div>


                <div className="nav-search">
                    <Link
                        to=''
                        className=""
                    >
                        <Icon icon="i-carbon-search" />
                        <span className="nav-menu-item-label">Search</span>
                    </Link>
                </div>
            </nav >
        </div >

    );
}
