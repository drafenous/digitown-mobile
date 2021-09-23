import React, {useState, useEffect} from 'react';

const useUserMenuHook = (showUserMenu?: boolean) => {
    const [userMenu, setUserMenu] = useState<boolean>(false);

    useEffect(() => {
        showUserMenu && setUserMenu(showUserMenu)
        console.log(showUserMenu)
    }, [showUserMenu])

    return userMenu
}

export default useUserMenuHook;
