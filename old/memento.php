A remettre en ligne 552 si besoin (code formulaire qui marche pas)


<div class="status">

    <!-- <?php 
    if(isset($_POST['submit']))
    {
        $User_name = $_POST['name'];
        $User_email = $_POST['email'];
        $User_message = $_POST['message'];

        $email_from = 'contact@chloegousse.com';
        $email_subject = "Nouveau message du formulaire";
        $email_body = "Name: $User_name.\n".
                        "Email Id: $User_email.\n". 
                        "Message visiteur : $User_message.\n". 

        $to_email = "goussechloe@gmail.com";
        $headers = "From: $email_from \r\n";
        $headers .= "Reply-To: $User_email\r\n";

        $secretKey = "6LcsM-0UAAAAAE_YoCe5Km4X3MZWBy6zc2WApYRn";
        $reponseKey = $_POST['g-recaptcha-response'];
        $UserIP = $_SERVER['REMOTE_ADDR'];
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$reponseKey&remoteip=$UserIP";

        $response = file_get_contents($url);
        $response = json_decode($response);

        if ($response->success)
        {
            mail($to_email,$email_subject,$email_body,$headers);
            echo "Message bien envoyé";
        }
        else 
        {
            echo "<span>Captcha invalide, réessayez svp</span>";
        }
    }

    ?> -->

</div>


<div class="g-recaptcha" data-sitekey="6LcsM-0UAAAAAMCu2OTeojGATIQH7OxRwlRm1qzC"></div>
                                    <br/>


Partie formulaire:

    <div class="col-6">
            <input name="name" type="text" class="form-control" placeholder="Prénom Nom" required id="inputname" value="<?= isset($_SESSION['inputs']['name']) ? $_SESSION['inputs']['name'] : ''; ?>">
        </div>






        <div class="col-xs-4">
        <?= $form->select('service', 'Service', ['Contact', 'Dépanage', 'Heimerdinger']); ?>
        </div>

        public function select($name, $label, $options){
        $options_html = "";
        $value = $this->getValue($name);
        foreach($options as $k => $v){
            $selected = '';
            if($value == $k){
                $selected = ' selected';
            }
            $options_html .= "<option value=\"$k\"$selected>$v</option>";
        }
        return "<div class=\"form-group\">
            <label for=\"input$name\">$label</label>
            <select name=\"$name\" class=\"form-control\" id=\"input$name\">$options_html</select>
        </div>";
    }


    $validator->check('service', 'in', array_keys($emails));
    [$_POST['service']]