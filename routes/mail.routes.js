import express from 'express'
import { authMiddleware } from '../midleware/auth.Middleware.js';
import { generateColdEmails } from '../services/mail.service.js';
import { deleteEmail, getEmailById, getMyEmails, updateEmail } from '../controller/mail.controller.js';
import { sendEmail } from '../services/email.service.js';

const router = express.Router();
router.post('.generate',authMiddleware,generateColdEmails);
router.get('/',authMiddleware,getMyEmails);
router.get('/',authMiddleware,getEmailById);
router.get('/:id',authMiddleware,updateEmail);
router.get('/:id',authMiddleware,deleteEmail);
router.get('/:id',authMiddleware,sendEmail);

export default router;


