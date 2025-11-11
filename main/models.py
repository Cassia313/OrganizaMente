from django.db import models

# Create your models here.
class Dicas(models.Model):
    dicaTitulo = models.CharField(max_length=255, null=False,unique=True)
    textoDica = models.CharField(max_length=1000)

    def __str__(self):
        return self.dicaTitulo