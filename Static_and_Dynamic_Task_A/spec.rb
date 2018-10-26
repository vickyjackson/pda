require('minitest/autorun')
require_relative('./card.rb')
require_relative('./testing_task_2.rb')

class CardTest < MiniTest::Test

  def setup()
    @game = CardGame.new()
    @card1 = Card.new("heart", 3)
    @card2 = Card.new("club", 11)
    @card3 = Card.new("ace", 1)
  end

  def test_check_for_ace_ace()
    actual = @game.check_for_ace(@card3)
    assert_equal(true, actual)
  end

  def test_check_for_ace_not_ace()
    actual = @game.check_for_ace(@card1)
    assert_equal(false, actual)
  end

  def test_highest_card()
    actual = @game.highest_card(@card1, @card2)
    assert_equal(@card2, actual)
  end

  def test_cards_total()
    cards = [@card1, @card2, @card3]
    actual = CardGame.cards_total(cards)
    assert_equal("You have a total of 15", actual)
  end

end
