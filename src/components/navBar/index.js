/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from "react";
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, CogIcon, HomeIcon, MenuIcon, TicketIcon, UsersIcon, XIcon} from '@heroicons/react/outline'
import Logo from '../../statics/logo.png';

const navigation = [
    {name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: false},
    {name: 'Utilisateurs', icon: UsersIcon, href: '/users', current: false},
    {name: 'Announces', icon: TicketIcon, href: '/announces', current: false},
    {name: 'Settings', icon: CogIcon, href: '/settings', current: false}
]
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        for (let i = 0; i < navigation.length; i++) {
            if (navigation[i].href === window.location.pathname) {
                navigation[i].current = true;
                setCurrent(navigation[i].name)
            }
        }
    });

    return (
        <div>
            <div className="bg-gray-800 pb-32">
                <Disclosure as="nav" className="bg-gray-800">
                    {({open}) => (
                        <>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="border-b border-gray-700">
                                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-8 w-8"
                                                    src={Logo}
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-10 flex items-baseline space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                            )}
                                                        >
                                                            <item.icon
                                                                className={classNames(
                                                                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                                    'mr-3 flex-shrink-0 h-6 w-6'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            <span className="flex-1">{item.name}</span>
                                                            {item.count ? (
                                                                <span
                                                                    className={classNames(
                                                                        item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
                                                                        'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                                                                    )}
                                                                >
                  {item.count}
                </span>
                                                            ) : null}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">
                                                {/* Profile dropdown */}
                                                <Menu as="div" className="ml-3 relative">
                                                    {({open}) => (
                                                        <>
                                                            <div>
                                                                <Menu.Button
                                                                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                    <span className="sr-only">Open user menu</span>

                                                                    <img
                                                                        className="h-8 w-8 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                        alt=""
                                                                    />
                                                                </Menu.Button>
                                                            </div>
                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items
                                                                    static
                                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                >
                                                                    {profile.map((item) => (
                                                                        <Menu.Item key={item}>
                                                                            {({active}) => (
                                                                                <a
                                                                                    href="#"
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100' : '',
                                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                                    )}
                                                                                >
                                                                                    {item}
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>
                                                                    ))}
                                                                </Menu.Items>
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className="-mr-2 flex md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button
                                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                                <div className="px-2 py-3 space-y-1 sm:px-3">
                                    {navigation.map((item, itemIdx) =>
                                        itemIdx === 0 ? (
                                            <Fragment key={item}>
                                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                <a href="#"
                                                   className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                    {item}
                                                </a>
                                            </Fragment>
                                        ) : (
                                            <a
                                                key={item}
                                                href="#"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                {item}
                                            </a>
                                        )
                                    )}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">Tom Cook
                                            </div>
                                            <div
                                                className="text-sm font-medium leading-none text-gray-400">tom@example.com
                                            </div>
                                        </div>
                                        <button
                                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        {profile.map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <header className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-white">
                            {current}
                        </h1>
                    </div>
                </header>
            </div>
        </div>
    )
}
