# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-10-11 16:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('awwwards', '0002_auto_20181011_1707'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='profile',
            new_name='user',
        ),
    ]