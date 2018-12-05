import React from 'react';

export const FormHasilLabPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Hasil Lab Pasien</h2>
            <div>
                <label>Nama Pasien </label>
                <input type="text" className="form-control" name="pasien.id" value={props.pasien.nama} readOnly/>
            </div>

            <div className="form-group">
                <label>Jenis <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"/>
            </div>

            <div className="form-group">
                <label>Hasil <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"/>
            </div>

            <div className="form-group">
                <label>Tanggal Pengajuan <span style={{ color: 'red' }}>*</span></label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>

            <button className="btn btn-success" value="submit">Tambah</button>
        </form>
    )
}