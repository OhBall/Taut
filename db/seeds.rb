# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Message.destroy_all
Channel.destroy_all

users = User.create!([
  {email: 'olivermartinball@gmail.com', username: 'Oliver', password: 'hunter2' },
  {email: 'jimmy@gmail.com', password: 'hunter2' },
  {email: 'john@continental.com', username: 'John', password: 'hunter2' },
  {email: 'guest@guest.com', username: "guest", password: 'hunter2'}
])

channels = Channel.create!([
  {name: 'general', description: 'Thread for general discussion'},
  {name: 'Lunch', description: 'Discuss your lunch plans here'}
])

messages = Message.create!([
  { user_id: User.first.id,
    body: 'Hello, and welcome to Taut!',
    conversationable_type: 'Channel',
    conversationable_id: Channel.first.id },
  { user_id: User.first.id,
    body: "This is a really long message. The purpose of this message is to make sure that extremely long messages are styled correctly. That's right! This message is both funny, and a test! By reading this, you yourself are participating in the test! Isn't that cool?",
    conversationable_type: 'Channel',
    conversationable_id: Channel.first.id },
  { user_id: User.first.id,
    body: "This \nis\na\nmulti-line message. \nHopefully, \nit's styled correctly!",
    conversationable_type: 'Channel',
    conversationable_id: Channel.first.id },
  { user_id: User.first.id,
    body: "ThisIsAlsoAVeryLongMessage.However,thePurposeOfThisMessageIsSlightlyDifferent.ASingleWordOfTextWouldNotBeProperlyBrokenUpAndThisIsTheTextToMakeSureThatIsAlsoAccountedFor!",
    conversationable_type: 'Channel',
    conversationable_id: Channel.first.id }
  
])
