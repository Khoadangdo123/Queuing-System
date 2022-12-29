import React from 'react'
import { Link } from 'react-router-dom'

const LinkSettingSystem = () => {
	return (
		<div>
			<Link to='/settingsystem'>Quản lý Vai Trò</Link>
		</div>
	)
}

const LinkSettingAccount = () => {
	return (
		<div>
			<Link to='/settingaccount'>Quản lý tài khoản</Link>
		</div>
	)
}

const NoteUser = () => {
	return (
		<div>
			<Link to='/noteuser'>Nhật ký người dùng</Link>
		</div>
	)
}

export { LinkSettingSystem, LinkSettingAccount, NoteUser };
