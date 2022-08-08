const LastTransaction = () => {

    const data = [
        {
            category: <><img className="bg-white px-0 me-3" src="/food-category.svg" alt=""/>Makanan & Minuman</>,
            date: '07 Aug 2022',
            desc: '-',
            total: '-Rp 100.000',
        },
        {
            category: <><img className="bg-white px-0 me-3" src="/health-category.svg" alt=""/>Kesehatan</>,
            date: '07 Aug 2022',
            desc: '-',
            total: '-Rp 250.000',
        },
        {
            category: <><img className="bg-white px-0 me-3" src="/family-category.svg" alt=""/>Keluarga</>,
            date: '07 Aug 2022',
            desc: '-',
            total: '-Rp 500.000',
        },
    ];

    return (
        <>
            <div className="card bg-white border-white p-2"
                 style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body bg-white">
                    <div className="d-flex justify-content-between bg-white">
                        <div className="bg-white">
                            <h5 className="card-title bg-white fw-bold m-0" style={{fontSize: 18}}>Transaksi
                                Terakhir</h5>
                        </div>
                        <div className="bg-white">
                            <h5 className="card-title bg-white fw-bold m-0" role="button"
                                style={{fontSize: 14, color: "#3F8DFD"}}>Lihat Semua ></h5>
                        </div>
                    </div>
                    <table className="table mt-4">
                        <tr>
                            <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 12}}>Kategori</td>
                            <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 12}}>Tanggal</td>
                            <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 12}}>Keterangan</td>
                            <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 12}}>Jumlah</td>
                        </tr>
                        {data?.map((item) => (
                            <>
                                <tr>
                                    <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 14}}>{item.category}</td>
                                    <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 14}}>{item.date}</td>
                                    <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 14}}>{item.desc}</td>
                                    <td className="bg-white" style={{fontWeight: 600, color: "#FF4343", fontSize: 14}}>{item.total}</td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default LastTransaction