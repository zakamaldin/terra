from django.db import models
from django.contrib.auth.models import AbstractUser


class Club(models.Model):
    class Meta:
        verbose_name = 'Клуб'
        verbose_name_plural = 'Клубы'
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    title   = models.CharField(verbose_name='Название клуба', max_length=50)
    address = models.CharField(verbose_name='Адрес', max_length=250)

    def __str__(self):
        return self.title
class Employee(AbstractUser):
    club = models.ForeignKey(Club,
                             on_delete=models.CASCADE,
                             verbose_name='Клуб',
                             blank=True,
                             null=True,
                             default=None)


class Event(models.Model):
    class Meta:
        verbose_name = 'Игротека'
        verbose_name_plural = 'Игротеки'

    created  = models.DateTimeField(verbose_name='Начало', auto_now_add=True)
    updated  = models.DateTimeField(auto_now=True)
    club     = models.ForeignKey(Club,
                                 on_delete=models.PROTECT,
                                 verbose_name='Клуб')
    end_time = models.DateTimeField(verbose_name='Окончание',
                                    blank=True,
                                    null=True,
                                    default=None)

    def __str__(self):
        return f'{self.club.title}: {self.created:%d.%m.%Y}'


class Member(models.Model):
    class Meta:
        verbose_name = 'Участник'
        verbose_name_plural = 'Участники'

    PAYMENT_TYPE = [
        ('card', 'Карта'),
        ('cash', 'Наличные'),
    ]

    created   = models.DateTimeField(auto_now_add=True)
    updated   = models.DateTimeField(auto_now=True)
    name      = models.CharField(verbose_name='Имя', max_length=50)
    phone     = models.CharField(verbose_name='Телефон', max_length=50, blank=True)
    event     = models.ForeignKey(Event,
                                  on_delete=models.PROTECT,
                                  verbose_name='Игротека',)
    pay       = models.CharField(verbose_name='Чек', max_length=5)
    extra_pay = models.BooleanField(verbose_name='Доплатил', default=False)
    payment_type = models.CharField(verbose_name='Способ оплаты',
                                    max_length=4,
                                    choices=PAYMENT_TYPE,
                                    default='cash')

