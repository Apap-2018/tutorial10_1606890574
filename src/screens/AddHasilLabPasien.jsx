import React from 'react';
import { Loading } from '../components/Loading';
import { FormHasilLabPasien } from '../containers/FormHasilLabPasien';
import { Appointment } from '../utils/Appointment';

export class AddHasilLabPasien extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if (response.status === 200){
				this.setState({
					loading: false,
					pasien: response.result
				})
				console.log("nama akan diberi hasil lab " + this.state.pasien.nama);
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading: true
		})
		
		const data = new FormData(e.target)
		const dataJson = {}
		data.forEach((val, key) => {
			if (val !== ""){
				let name = key.split('.');
				if (name.length > 1) {
					let last = name.pop()
					name.reduce((prev, next) => {
						return prev[next] = prev[next] || {};
					}, dataJson)[last] = val
				} else {
					dataJson[key] = val
				}
			}
		})

		Appointment.addHasilLabPasien(dataJson).then(response => {
			if (response.status === 200){
				this.setState({
					loading: false
				})
				console.log("nama tambah hasil "+ this.state.pasien.nama);
				alert(`Sukses menambahkan hasil lab pasien ${this.state.pasien.nama}`)
			} else {
				this.setState({
					loading: false
				})
				alert(`Gagal menambahkan hasil lab pasien ${this.state.pasien.nama}`)
			}
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormHasilLabPasien pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}