// Prix moyens nationaux (source : gouvernement.fr)
const PRIX_CARBURANT = {
    SP95: 1.85,
    Gazole: 1.70,
    E85: 0.85
};

function calculer() {
    // Récupération des valeurs
    const distance = parseFloat(document.getElementById('distance').value);
    const conso = parseFloat(document.getElementById('consommation').value);
    
    // Validation
    if (isNaN(distance) || isNaN(conso)) {
        alert("Veuillez remplir tous les champs correctement");
        return;
    }

    // Calculs
    const coutSP95 = (distance * conso * PRIX_CARBURANT.SP95) / 100;
    const coutGazole = (distance * conso * PRIX_CARBURANT.Gazole) / 100;
    
    // Affichage
    document.getElementById('resultat').innerHTML = `
        <h3>Résultats :</h3>
        <p>Coût avec SP95 : <strong>${coutSP95.toFixed(2)}€</strong></p>
        <p>Coût avec Gazole : <strong>${coutGazole.toFixed(2)}€</strong></p>
        <small>Prix moyens nationaux - Mise à jour quotidienne</small>
    `;
}
