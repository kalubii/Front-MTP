import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'bd_dpse',
})

// REQUETE LOCALITE

// app.get('/liste_RN/:axe/:region/:pk_debut/:pk_fin',(req,res) => {
//     let sql = "SELECT * FROM localite WHERE region = ?";
//     let params = [req.params.region];

//     if (req.params.axe) {
//         sql += " AND AXES = ?";
//         params.push(req.params.searchAxe);
//     }
//     if (req.params.pk_debut) {
//         sql += " AND PK_DEBUT = ?";
//         params.push(req.params.pk_debut);
//     }
//     if (req.params.pk_fin) {
//         sql += " AND PK_FIN = ?";
//         params.push(req.params.pk_fin);
//     }
//     if (req.params.region) {
//         sql += " AND REGION = ?";
//         params.push(req.params.region);
//     }

//     db.query(sql, params, (err, result) => {
//         if (err) return res.json({ Message: err });
//         return res.json(result);
//     })

// })

app.get('/localite_RN', (req, res) =>{
    let params = []
    let sql = "SELECT * from localite"

    if (req.query.axe) {
        sql += " AND AXES = ?";
        params.push(req.query.axe);
    }

    if (req.query.pkFin) {
        sql += " AND PK_FIN = ?";
        params.push(req.query.pkFin);
    }

    if (req.query.pkDebut) {
        sql += " AND PK_DEBUT = ?";
        params.push(req.query.pkDebut);
    }
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:err})
        return res.json(result);
    })

})
// app.get('/localiteAntsiranana', (req, res) =>{
//     const sql = "SELECT * FROM antsiranana"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteFianarantsoa', (req, res) =>{
//     const sql = "SELECT * FROM fianarantsoa"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteMahajanga', (req, res) =>{
//     const sql = "SELECT * FROM mahajanga"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteToamasina', (req, res) =>{
//     const sql = "SELECT * FROM toamasina"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteToliara', (req, res) =>{
//     const sql = "SELECT * FROM toliara"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })

// REQUETE PROJET
app.get('/projet/:annee/:searchAxe/:pkDebut/:pkFin', (req, res) =>{
    
    let sql = ""
    
   if(req.params.searchAxe != "null" && req.params.pkDebut != "null" && req.params.pkFin != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
   }else if(req.params.searchAxe != "null" && req.params.pkDebut != "null"){
    sql =  "SELECT * FROM projet WHERE _date= "+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"'"
   }else if(req.params.searchAxe != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+" AXE= '"+req.params.searchAxe+"'"
   }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
   }else if(req.params.pkDebut != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"'"
   } else if(req.params.pkFin != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_FIN ='"+req.params.pkFin+"'"
   }else if (req.params.pkDebut != "null" && req.params.pkFin != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
   }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
    sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
   }

    (sql, (err,result)=>{
        if(err) return res.json({Message:err})
        return res.json(result);
    })
})

// app.get('/projet2022', (req, res) =>{
//     const sql = "SELECT * FROM donnee"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })

// app.get('/projet2021', (req, res) =>{
//     const sql = "SELECT * FROM projet2021"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })

// app.get('/projet2020', (req, res) =>{
//     const sql = "SELECT * FROM projet2020"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })
app.listen(8081, ()=>{
    console.log('Serveur démarrer avec succès...')
})

//INSERET PROJET
app.post('/projet2024', (req, res) => {
    let { faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_Fin, annee, avancement, observation } = req.body;

    db.query(
        "INSERT INTO projet2024 (faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_fin, annee, avancement, observation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_Fin, annee, avancement, observation],
        (err, resultat) => {
            if (err) {
                console.error("Erreur lors de l'insertion :", err);
                return res.status(500).json({ Message: "Erreur de serveur" });
            }
            console.log("Élément inséré avec succès !");
            return res.status(200).json({ Message: "Élément inséré avec succès" });
        }
    );
});