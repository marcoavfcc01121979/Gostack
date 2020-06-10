# Recuperação de senha
**RF**
- O usuario deve poder recuperar sua senha informando seu email
- O usuario deve receber um e-mail com instruções de recuperação de senha
- O usuario deve poder resetar sua senha.

**RNF**

- Ultilizar Mailtrap.io para testar envios em ambientes de dev;
- Ultilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job)

**RN**

- O link enviado por email para resetar senha, deve expirar em 2 horas;
- O usuario precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha.

**RN**

- O usuario não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especificos
- prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder visualizar as notificações não lidas.

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador deven ser enviadas em tempo-real ultilizando Socket-io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador passe a controlar.

# Agendamento de Serviços

**Rf**

- O usuario deve poder listar todos os prestadores de servicos cadastrados
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador.
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador.
- O usuario deve poder realizar um novo agendamento com um prestador.

**RNF**

- A listagem de prestadores deve ser armazenda em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h ás 18h (Primeiro ás 8h, ultimo ás 17h)
- O usuario não pode agendar em um horario ja ocupado.
- O usuario não pode agendar em um horario que ja passou.
- O usuario não pode agendar servicos consigo mesmo;
