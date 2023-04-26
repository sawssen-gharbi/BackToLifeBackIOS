import reservation from "../models/reservation.js";
import user from '../models/user.js'
import therapy from "../models/therapy.js";


export function sendRequest(req,res){
    
    const invi=new reservation({
        patient:req.body._id,
        doctor:req.body._id,

        

     
    })
    

    invi.save().then(doc=>{
        res.status(201).json(doc)
    }).catch(err=>{
        res.status(400).json(err)
    })
}


export function acceptRequest(req,res){
    const inv=reservation.findOne({_id:req.body.id})
    if(inv){
        inv.updateOne({status:"accepter"}).then(doc=>{
            res.status(200).json(doc)
        }).catch(err=>{
            res.status(400).json(err)
        })
    }else{
        res.status(404).json({error :"reservation not found !"})
    }
}


//if user refuse invi then delete invi
export function refuseRequest(req,res){
    reservation.findOneAndDelete({_id:req.body.id})
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

/*export async function getInvitationsAttente(req,res){
    const invs =await invitation.find({destinataire:req.params.currentUser, status:"En attente"}).populate({ 
        path: 'destinataire', 
      }).populate({ 
        path: 'expediteur', 
      })
    if(invs){
        res.status(200).json(invs)
    }else{
        res.status(400).json({err:"Probléme !"})
    }
}*/
export function getAll(req, res) {
    reservation
    .find({ role: req.params.role}).populate({ 
        path: 'patient'}).populate({ 
            path: 'doctor', 
          })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

}