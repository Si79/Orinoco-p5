class Utils {
    static convertCentimesToEuros(centimeNumber){
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(centimeNumber / 100)
    }
}