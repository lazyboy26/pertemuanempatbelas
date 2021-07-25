function proses() {
    var barang=document.getElementById("pilihan").value;

    var jumlah=document.getElementById("Jumlah").value;

    switch (barang) {
        case "Pilih Barang":
            alert("Pilih Barang Terlebih Dahulu!");
            break;
        case "Monitor":
            // Harga
            var hargaMonitor= document.getElementById("Harga").value=150000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaMonitor;
            break;
        case "Keyboard":
            // Harga
            var hargaKey= document.getElementById("Harga").value=100000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaKey;
            break;
        case "Mouse":
            // Harga
            var hargaMouse= document.getElementById("Harga").value=50000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaMouse;
            break;
    
        default:
            alert("Data Tidak Valid!");
            break;
    }

  }