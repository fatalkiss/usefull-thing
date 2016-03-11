# usefull-thing
--PAGE 404 DEMO  http://codepen.io/StillArt/pen/eZzNab

--Crop Border 
 * Install 1) Create folder components in root of project
           2) Write in config/web   
            'components' => [
    
            'cropimage' => [
    
                  'class' => 'app\components\CropImage',
    
              ]
 * Use  In you function 
  $config = array("source" => <url to source image, "save" => <where to save result, can be same as source, "borderColor" =>      <color of border to remove>, "accuracy" => <way to remove border>);
  Yii::$app->cropimage->removeBorders($config);

 *Example 
   $config = array("source"=>"http://www.personal.psu.edu/sdh5174/Mario_png.png","save"=>'img/',"borderColor"=>0xFFFFFF,"accuracy"=>10);
      Yii::$app->cropimage->removeBorders($config);
