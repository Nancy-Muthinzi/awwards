# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-10-13 07:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('awwwards', '0008_remove_project_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
