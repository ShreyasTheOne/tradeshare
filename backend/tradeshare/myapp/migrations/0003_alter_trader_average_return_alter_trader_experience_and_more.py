# Generated by Django 4.2.5 on 2024-03-09 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_trader_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trader',
            name='average_return',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='trader',
            name='experience',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='trader',
            name='subscribers',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='trader',
            name='trading_strategy',
            field=models.TextField(null=True),
        ),
    ]