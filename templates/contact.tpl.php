<!--Contact-->
<section class="contact-us" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="section-title text-center">
                            <h1>Prendre contact ?</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="contact-form">

                            <div class="row">
                                <div class="text">
                                    <h2>Envoyez-moi un message !</h2>
                                    <p>Promis, je vous répondrai rapidement ! 📪 -> 📬</p>
                                </div>
                            </div>

                                <div class="starter-template">

                                    <?php if(array_key_exists('errors', $_SESSION)): ?>
                                        <div class="alert-danger">
                                            <?= implode('<br>', $_SESSION['errors']); ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if(array_key_exists('success', $_SESSION)): ?>
                                        <div class="alert-success">
                                            Votre email a bien été envoyé
                                        </div>
                                    <?php endif; ?>


                                    <form action="post_contact.php" method="POST">
                                        <?php $form = new Form(isset($_SESSION['inputs']) ? $_SESSION['inputs'] : []); ?>

                                        

                                            <div class="row space-between">
                                                <div class="col-6">
                                                    <?= $form->text('name', 'Votre Nom'); ?>
                                                </div>
                                                <div class="col-6">
                                                    <?= $form->email('email', 'Votre Email'); ?>
                                                </div>
                                                <div class="col-4 select">
                                                    <?= $form->select('service', 'Service', ['Contact', 'Dépanage', 'Heimerdinger']); ?>
                                                </div>
                                                <div class="col-12">
                                                    <?= $form->textarea('message', 'Votre message'); ?>
                                                
                                                
                                                    <?= $form->submit('Envoyer'); ?>
                                                </div>
                                                
                                            
                                        
                                        </div>

                                    </form>

                                </div>   

                        </div>

                    </div>
                </div>
            </section>
        <!--End de Contact-->