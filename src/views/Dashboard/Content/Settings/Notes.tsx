import React from 'react'
import DateTime from './components/DateTime'
import { InputSearchNotes } from './components/Input'
import { ListNotes } from './components/List'


const Notes = () => {
	return (
		<>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 30 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '93%' }}>
					<DateTime />
					<InputSearchNotes />
				</div>
			</div>
			<div style={{ marginTop: 20 }}>
				<ListNotes />
			</div>
		</>
	)
}

export default Notes
