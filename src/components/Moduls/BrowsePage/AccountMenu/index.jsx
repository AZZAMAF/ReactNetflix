import React from 'react'

const AccountMenu = () => {
    return (
        /* Gunakan tag custom-nya */
        <el-dropdown className="inline-block">
            {/* Trigger: Avatar jadi button */}
            <button className="avatar block focus:outline-none">
                <div className="w-10 rounded">
                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="profile" />
                </div>
            </button>

            {/* Menu: Gunakan atribut popover dan anchor */}
            <el-menu 
                anchor="bottom end" 
                 
                className="w-44 origin-top-right divide-y divide-white/10 rounded-md bg-stone-900 text-white outline-1 outline-white/10 transition transition-discrete data-closed:scale-95 data-closed:opacity-0"
            >
                <div className="py-1">
                    <button 
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                        onClick={() => console.log("Sign Out clicked")}
                    >
                        Sign Out of Netflix
                    </button>
                </div>
            </el-menu>
        </el-dropdown>
    )
}

export default AccountMenu