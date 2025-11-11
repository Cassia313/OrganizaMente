from django.db import models

# Create your models here.
class Dicas(models.Model):
    dicaTitulo = models.CharField(max_length=255, null=False,unique=True)
    textoDica = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='uploads/') # 'uploads/' is a subdirectory within MEDIA_ROOT
     

    def __str__(self):
        return self.dicaTitulo

