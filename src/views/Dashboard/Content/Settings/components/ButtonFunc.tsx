import { Button, Typography } from "antd"

const { Text } = Typography;

const ButtonCancel = () => {
	return (
		<Button
			style={{
				width: 150,
				height: 50,
				border: '1.5px solid #FF9138',
				background: '#FFF2E7',
				borderRadius: '8px'
			}}
			type="primary"
			ghost
		>
			<Text style={{ fontSize: 16, color: '#FF9138', fontWeight: 700 }}>
				Hủy bỏ	
			</Text>
		</Button>
	)
}

const ButtonAdd = () => {
	return (
		<Button
			style={{ width: 150, height: 50 }}
			className="button_primary" 
			type="primary"
		>
			<Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}>
				Thêm
			</Text>
		</Button>
	)
}


const ButtonClickCancelAndAdd = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
			<div style={{ width: '24%', display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<ButtonCancel />
				</div>
				<div>
					<ButtonAdd />
				</div>
			</div>
		</div>
	)
}

export { ButtonClickCancelAndAdd };