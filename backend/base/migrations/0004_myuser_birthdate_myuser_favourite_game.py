# Generated by Django 5.1.3 on 2024-12-01 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_post_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='birthdate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='myuser',
            name='favourite_game',
            field=models.CharField(blank=True, choices=[('valorant', 'Valorant'), ('league_of_legends', 'League of Legends'), ('fortnite', 'Fortnite'), ('call_of_duty', 'Call of Duty')], max_length=50, null=True),
        ),
    ]
